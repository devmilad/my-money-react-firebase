import Styles from './Home.module.css'

import React from 'react';
import TransactionForm from './TransactionForm';
import {useAuthContext} from "../../hooks/useAuthContext"
import { useCollection } from '../../hooks/useCollection';
import TransactionList from './TransactionList';
const Home = () => {
    const {user}=useAuthContext()
    const {documents, error}=useCollection('transactions', ['uid', '==' , user.uid], ["createdAt", "desc"])
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                {error && <p>{error}</p>}
                {documents && <TransactionList  transaction={documents} />}
            </div>
            <div className={Styles.sidebar}>
               <TransactionForm uid={user.uid}/>
            </div>
        </div>
    );
}

export default Home;
