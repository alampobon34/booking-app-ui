import React from 'react'

const ErrorTitle = ({ error, styles }: { error: string; styles?: string }) => {
    return (
        <span className={`text-red-600 text-xs italic ${styles}`}>{error}</span>
    )
}

export default ErrorTitle