import { signInWithSocial } from "../auth/socialAuth";

function SocialLogin() {
  const handleSocialLogin = async (provider) => {
    try {
      const user = await signInWithSocial(provider);
      console.log("Usuário logado:", user);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div>
      <button onClick={() => handleSocialLogin("google")}>
        Entrar com Google
      </button>
      <button onClick={() => handleSocialLogin("facebook")}>
        Entrar com Facebook
      </button>
      <button onClick={() => handleSocialLogin("twitter")}>
        Entrar com Twitter
      </button>
    </div>
  );
}

export default SocialLogin;
