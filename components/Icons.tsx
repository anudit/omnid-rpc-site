import React from "react";
import { createIcon } from '@chakra-ui/icons';

export const OmnidIcon = createIcon({
    displayName: 'OmnidIcon',
    viewBox: '0 0 512 512',
    path: (
        <g>
            <path fill="currentColor" d="M262 498C93 486 91 44 253 14c170 10 169 460 9 484zm77-242c4-52-28-295-114-206a468 468 0 0 0 0 412c87 90 118-154 114-206z"/>
            <path fill="currentColor" d="M501 315v6h-1v9c-51 112-453 116-485-9 13-133 461-133 485-6h1zm-243-62c-69 1-141 9-203 38-29 22-31 31 0 54 53 47 451 59 427-38-48-50-158-52-224-54z"/>
        </g>
    )
});

export const CodeIcon = createIcon({
    displayName: 'CodeIcon',
    viewBox: '0 0 24 24',
    path: (
        <path fill="currentColor" d="M3.3 5.3a1 1 0 0 1 1.4 0l6 5.5a1 1 0 0 1 0 1.4l-6 6.5a1 1 0 0 1-1.4-1.4l5.3-5.7-5.3-4.9a1 1 0 0 1 0-1.4zM9 18c0-.6.4-1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1z"/>
    )
});
