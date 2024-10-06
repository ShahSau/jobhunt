import React, { ReactNode,FC } from "react";
import { cn } from "../lib/utils";


const Card: FC<{ className?: string; children: ReactNode }> = ({ className, children }) => {
    return (
        <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
        {children}
        </div>
    );
}

const CardHeader: FC<{ className?: string; children: ReactNode }> = ({ className, children }) => {
    return (
        <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
        {children}
        </div>
    );
}

const CardTitle: FC<{ className?: string; children: ReactNode  }> = ({ className, children }) => {
    return <h3 className={cn("text-2xl font-semibold leading-none tracking-tight",className)}>{children}</h3>;
}

const CardDescription: FC<{ className?: string; children: ReactNode }> = ({ className, children }) => {
    return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
}

const CardContent: FC<{ className?: string; children: ReactNode }> = ({ className, children }) => {
    return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

const CardFooter: FC<{ className?: string; children: ReactNode }> = ({ className, children }) => {
    return <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>;
}



export { Card, CardHeader, CardTitle,CardDescription,CardContent,CardFooter };
