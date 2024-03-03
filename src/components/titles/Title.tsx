import React from "react";

interface TitleProps {
    title: string;
}
export const Title = ({ title }: TitleProps) => {
    return <h1 className="text-xl md:text-2xl font-bold text-custom-black-900">{title}</h1>;
};