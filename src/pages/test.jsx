import { useState } from "react"

export default function Test(props) {
    const [umur, setUmur] = useState()
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{umur}</h3>
            <input type="text" onChange={(e) => (
                setUmur(e.target.value)
            )}/>
            <button onClick={() => setUmur("22")}>Ubah umur jadi 22</button>
        </div>
    )
}