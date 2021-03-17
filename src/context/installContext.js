import React from "react";

const InstallContext = React.createContext({
    projectType: undefined,
    installStory: undefined,
    typeOfHome: undefined,
    workspaceLocation: undefined,
    bathroomLocation: undefined,
    onlyBathroom: undefined,
    waterShutOff: undefined,
    hasBasement: undefined,
    basementCondition: undefined,
    isPermitRequired: undefined,
    hoa: undefined,
});

export default InstallContext;
