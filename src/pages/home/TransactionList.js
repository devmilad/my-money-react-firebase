import React from 'react';
import { useFirestore } from '../../hooks/useFirestore';
import styles from './Home.module.css'

const TransactionList = ({transaction}) => {
    const {deleteDocument,response}=useFirestore('transactions')
    console.log(response);
    return (
        <ul className={styles.transactions}>
            {transaction.map((tr)=>(
                <li key={tr.id}>
                    <p className={styles.name}>{tr.name}</p>
                    <p className={styles.amount}>${tr.amount}</p>
                    <button onClick={()=>deleteDocument(tr.id)}>x</button>
                </li>
            ))}
        </ul>
    );
}

export default TransactionList;
