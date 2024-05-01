import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import ldap from 'ldapjs';

const ldapClient = ldap.createClient({
  url: 'ldap://localhost:389',
});

const authenticateLdap = async (username, password) => {
  return new Promise((resolve, reject) => {
    ldapClient.bind(`cn=${username},dc=monorganisation,dc=com`, password, (err) => {
      if (err) {
        return reject(new Error('Invalid credentials'));
      }
      resolve({ id: username, name: username, email: `${username}@monorganisation.com` });
    });
  });
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'LDAP',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'johndoe' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const user = await authenticateLdap(credentials.username, credentials.password);
          return user;
        } catch (e) {
          throw new Error(e.message);
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async (session, token) => {
      session.user.id = token.id;
      return session;
    },
  },
});
