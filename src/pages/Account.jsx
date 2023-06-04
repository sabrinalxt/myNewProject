import React from 'react';
import db from '../../api/firebaseConfig.js'
import { collection, onSnapshot } from "firebase/firestore";
import { View, Flatlist, Text } from 'react-native';



const Account = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const getDocuments = () => {
            const dbRef = collection(db, 'testCollection')
            onSnapshot(dbRef, (docsSnap) => {
                var docsArr = []
                docsSnap.forEach(doc => {
                    docsArr.push(doc.data())
                    setData(docsArr)
                })
            })
        }
        return getDocuments()
    }, [])

    return (
        <view>
            <Flatlist
                data={data}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
            {/* <Text>This is the Account page.</Text> */}
        </view>
    )
};

export default Account;