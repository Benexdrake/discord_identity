
import {signIn, signOut, useSession} from 'next-auth/react'

export default function Home()
{

    const {data: session} = useSession()

    return (
      <div className='container'>
        { !session && 
          <>
            <button className='btn btn-primary' onClick={() => signIn('discord')}>Sign in</button>
          </>
        }

        { session && 
          <>
            <button className='btn btn-danger' onClick={() => signOut()}>Sign out</button>
            <p>Welcome {session.user.global_name}</p>
            <img src={`https://cdn.discordapp.com/avatars/${session.user.id}/${session.user.avatar}.webp`} />
          </> 
        }
      </div>
    )
}