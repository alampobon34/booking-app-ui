import React from 'react'
import { NavLink as prop } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

interface Prop {
    navLink: prop
}

const NavLink = ({ navLink }: Prop) => {
    return (
        <Link className='flex items-center gap-1 nav-links' href={navLink.link}>
            <Image src={`/assets/icons/${navLink.iconName}`}
                alt="Logo"
                width={16}
                height={16}
                objectFit="contain" />
            {navLink.name}
        </Link>
    )
}

export default NavLink