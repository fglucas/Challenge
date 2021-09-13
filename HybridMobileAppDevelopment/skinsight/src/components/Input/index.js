import React from "react"

import { LineInput, OutlineInput, Row, Error } from "./style"

export function Input({ placeholder, value, onChange, cadastro, error }) {


    if (cadastro) {
        return <Row>
            <OutlineInput
                value={value}
                onChangeText={(e) => onChange(e)}
                placeholderTextColor="#40330C"
                placeholder={placeholder}
                selectionColor="#40330C" />
            {error && <Error>*{error}</Error>}
        </Row>
    }

    return (

        <Row>
            <LineInput
                value={value}
                error={error}
                onChangeText={(e) => onChange(e)}
                placeholderTextColor="#F2F2F2"
                placeholder={placeholder}
                selectionColor="#F2F2F2" />
            {error && <Error error={error}>*{error}</Error>}

        </Row>

    )
}
