import { Counter } from './Counter';
import { useState } from 'react';
import Button from '@mui/material/Button';
import InfoButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import InfoIcon from '@mui/icons-material/Info';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CallProduct({ pv, id, products, setProducts }) {
    const [show, setShow] = useState(true)
    const history = useHistory();

    const summarystyles = {
        display: show ? "block" : "none"
    };


    return (
        <Card sx={{ maxWidth: 400, minWidth: 400, height:"min-content" }}>
            <CardHeader className="product-title"
                title={pv.title}
            />
            <CardMedia
                component="img"
                height="150"
                className="product-picture"
                image={pv.picture}
                alt={pv.title}
            />
            <InfoButton
                color="secondary"
                onClick={() => {
                    console.log(id)
                    history.push("/Pvs/" + id)
                }}>
                <InfoIcon />
            </InfoButton>
            <h3 className="product-price"> Price: ₹ {pv.price} </h3>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Button onClick={() => setShow(!show)} variant="outlined">{show ? "Hide" : "Show"} Description</Button>
                    <p style={summarystyles}> {pv.description} </p>
                </Typography>
                <InfoButton

                    onClick={() => {
                        console.log(id)
                        history.push("/Edit/" + id)
                    }}>
                    <EditSharpIcon />
                </InfoButton>
                <InfoButton
                    onClick={() => {
                        const rem = products.filter((mvx, idx) => idx !== id);
                        setProducts(rem);

                    }}>
                    <DeleteSharpIcon />
                </InfoButton>
                <Counter />
            </CardContent>
        </Card>
    );
}