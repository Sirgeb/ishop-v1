import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User/User';
import { useRouter } from 'next/router';
import Signin from './Signin';

const SignInAuth = (props) =>  {
  const router = useRouter();

  return (
      <Query query={CURRENT_USER_QUERY}>
        {({data, loading}) => {
          if (loading) return <p> Loading... </p>;
          if (!data.me) {
            return (
              <Signin pathname={router.pathname && router.pathname} />
            )
          }
          
          return props.children;
        }}
      </Query>
  );
}

export default SignInAuth;