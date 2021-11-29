import React, { useEffect } from 'react';
import { useHistory } from 'react-router'
export default function Blank() {
    const history = useHistory()
    useEffect(()=>{
        history.push(`/Home`)
    })
        return null;
    
}