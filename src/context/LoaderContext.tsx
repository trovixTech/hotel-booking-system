import React, { createContext, useState, useContext } from "react";

interface LoaderContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);

    const updateLoading = (val: boolean) => setLoading(val);

    return (
        <LoaderContext.Provider value={{ loading, setLoading: updateLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = (LoaderContext: React.Context<LoaderContextType | undefined>) => {
    const context = useContext(LoaderContext);
    if (!context) throw new Error("useLoader must be used within a LoaderProvider");
    return context;
};

export default LoaderContext;