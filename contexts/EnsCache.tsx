import React, { ReactNode, useState, createContext } from "react";
import { getAddress } from "ethers/lib/utils";
import { Dictionary } from "../types";

type ProviderValue = {
    getEnsData: Function,
    addressToEns: Function,
    ensToAddress: Function
};

type DefaultValue = undefined;

type EnsCacheProviderProps = {
    children: ReactNode;
};

export type EnsResponse = {
    address: null | string,
    name: null | string,
    displayName: string,
    avatar: null | string,
}

export const EnsCacheContext = createContext<ProviderValue|DefaultValue>(undefined);

export const EnsCacheProvider = (props:EnsCacheProviderProps) => {

    let [cache, setCache] = useState<Dictionary<EnsResponse>>({});

    async function getEnsData(addressOrEns: string){
        try {

            if (Object.keys(cache).includes(addressOrEns.toLowerCase()) === true){
                // console.log('using cache', addressOrEns) // Enable to see the pref improvements
                return cache[addressOrEns];
            }
            else {
                let resp = await fetch(`https://api.ensideas.com/ens/resolve/${addressOrEns.toLowerCase()}`).then(r=>(r.json()));
                let resp2 = resp as EnsResponse;
                setCache(e=>{
                    if (resp2?.address != null){
                        let data = e;
                        data[resp2.address.toLowerCase()] = resp2;
                        if (resp2.name != null){
                            data[resp2?.name.toLowerCase()] = resp2;
                        }
                        return data;
                    }
                    else return e;
                })
                return resp2;
            }

        } catch (error) {
            console.log('getEnsData.error', error)
            return false;
        }
    }

    async function addressToEns(address: string){
        let resp = await getEnsData(address);

        if (resp != false && resp?.name === null) return resp.name;
        else return false;
    }

    async function ensToAddress(ensAddress: string){
        let resp = await getEnsData(ensAddress);

        if (resp != false && resp?.address !== null) return getAddress(resp.address);
        else return false;
    }

    return (
        <EnsCacheContext.Provider value={{ getEnsData, addressToEns, ensToAddress }}>
              {props.children}
        </EnsCacheContext.Provider>
    )
}
