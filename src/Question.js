import Button from "@mui/material/Button";
import React, {useState} from "react";
import Progress from "./Progress";
import PoweredBy from "./PoweredBy";
import styled from '@emotion/styled';

export default function Question({endpoint, sourceId, sessionId, profileId, onCustomize, onEnd}) {

    const [loading, setLoading] = useState(false)

    const CustomizeButton = styled.div`
          display: none;
        
          @media (min-width: 800px) {
            display: block;
          }
    `;

    const ResizeableContent = styled.p`
        font-size: 13px;
        
        @media (min-width: 800px) {
          font-size: 15px;
          margin: 0 10px 0 0;
          height: 100%;
          align-content: center;
        }
    `;
    
    const handleAgreeAllConsents = async () => {
        const payload = {
            source: {
                id: sourceId
            },
            session: {
                id: sessionId
            },
            profile: {
                id: profileId
            }
        }

        setLoading(true)
        try {
            const response = await fetch(endpoint + "/customer/consent?all=true", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                credentials: 'omit'
            })

            console.log(response)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false);
        }
    }

    const handleAgree = async () => {
        await handleAgreeAllConsents()
        if (onEnd) {
            onEnd()
        }
    }

    const Ask = () => <>
        <ResizeableContent>By clicking “Agree”, you agree to this site Privacy Policy & Use Terms.</ResizeableContent>
        <div style={{display: "flex", flexWrap: "nowrap"}}>
            <Button variant="contained" style={{marginRight: 10, marginBottom: 2}} onClick={handleAgree}>Agree</Button>
            <CustomizeButton><Button variant="outlined" onClick={onCustomize}>Customize</Button></CustomizeButton>
        </div>
        <PoweredBy/>
    </>

    return <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: 60,
        padding: "0 10px"
    }}>
        {loading && <Progress/>}
        {!loading && <Ask/>}
    </div>
}
