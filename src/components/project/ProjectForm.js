import { useState, useEffect } from 'react'
import { Input } from '../form/Input'
import { Select } from '../form/Select'
import { SubmitButton } from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export const ProjectForm = ({ btnText }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        //Runs only on the first render
        fetch('http://localhost:5000/categories')
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <form className={styles.form}>

            <Input
                type='text'
                text='Nome do Projeto'
                name='name'
                placeholder='Insira o nome do projeto'
            />

            <Input
                type='number'
                text='Orçamento do Projeto'
                name='Budget'
                placeholder='Insira o orçamento total'
            />

            <Select
                name='category_id'
                text='Selecione a categoria'
                options={categories}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}