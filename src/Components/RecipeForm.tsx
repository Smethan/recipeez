import React, {FC, ReactElement} from "react";
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';



const RecipeForm = () => {
    const [name, setName] = React.useState('');
    const [timeToPrepare, setTimeToPrepare] = React.useState(0);
    const [ingredients, setIngredients] = React.useState([{ingredient: '', amount: '', measurement: ''}]);
    const [instructions, setInstructions] = React.useState([]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    const handleTtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    const handleIngredientChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {

    }

    const handleInstructionChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <Box component='form' sx={{display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2, m: 5}}>
            <FormControl>
                <InputLabel htmlFor='name'>Name</InputLabel>
                <OutlinedInput required id='name' value={name} onChange={handleNameChange} label="Name" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='ttp'>Time to Prepare</InputLabel>
                <OutlinedInput required id='ttp' value={timeToPrepare} onChange={handleTtpChange} label="Time to Prepare" />
            </FormControl>
            {ingredients.map(({ ingredient, amount, measurement }, i) => {
                return (<FormControl>
                    <InputLabel htmlFor='ingredient-${i}'>Ingredient</InputLabel>
                    <OutlinedInput id='ingredient-${i}' value={ingredient} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => handleIngredientChange(evt, i)} label="ingredient" />
                </FormControl>)
            })}
        </Box>
    );
}

export default RecipeForm;