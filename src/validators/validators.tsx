import React from 'react'

export function isEmpty (event: any) {
    if (event.target.value.length < 0) {
        event.preventDefault()
        return false
    }
}
