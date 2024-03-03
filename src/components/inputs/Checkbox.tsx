import React from 'react'

interface CheckboxProps {
    id?: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked?: boolean,
}


const Checkbox = ({ id, name, value, onChange, isChecked }: CheckboxProps) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <input checked={isChecked} className="accent-primary-black h-[18px] w-[18px]" name={name} value={value} onChange={onChange} type="checkbox" />
                <span>{name}</span>
            </div>
        </div>
    );
};

export default Checkbox