
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useEffect, useMemo } from 'react';
import Layout from '../component/common/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { reducersType } from '../redux/Store';
import { reducerAction } from '../constants/constant';
import { getUser } from '../actions/userAction';
import Loader from '../component/Loder';
import CustomCard from '../component/Card';

function UserListing() {
    const usersReducer = useSelector((state: reducersType)=>state.users);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (usersReducer.reset){
            dispatch({ type: reducerAction.LOADING, payload: true })
            getUser({limit:5} , (result:any)=>{
                dispatch({ type: reducerAction.ADD_USER, payload: result })
                dispatch({ type: reducerAction.RESET_ACTION, payload: false })
                dispatch({ type: reducerAction.LOADING, payload: false })
            } );
        }
    },[])

    const deleteUser = (id:number) =>{
        dispatch({ type: reducerAction.DELETE_USER, payload: id })
    }

    const fetchUser = ()=>{
        dispatch({ type: reducerAction.LOADING, payload: true })
        getUser({ limit: 5 }, (result: any) => {
            dispatch({ type: reducerAction.ADD_USER, payload: result })
            dispatch({ type: reducerAction.LOADING, payload: false })
        });
    }

    const  Userlisting = useMemo(()=>{
        return(<>
        <Grid style={{ paddingBottom: '14px', }} ><Button size="large" variant="contained" onClick={fetchUser}>Refresh</Button></Grid>
            <Grid container spacing={4}>
                {usersReducer.users.map((user: any) => (
                    <CustomCard
                        key={user.id} imageUrl={user.imageUrl}
                        onClick={() => deleteUser(user.id)}
                        contactNumber={user.contactNumber}
                        email={user.email}
                    />
                ))}
            </Grid>
        </>)
    }, [usersReducer.users])
   
  return (
      <Layout>
          {(usersReducer.loading) ? <Loader /> : Userlisting }
      </Layout>
  )
}

export default UserListing