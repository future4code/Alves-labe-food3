export const goInicio = navigate => {
    navigate('/')
  }

export const goLogin = navigate => {
    navigate('/login')
  }
  
  export const goCadastro = (navigate, setPoke, poke) => {
    navigate('/cadastro')
    setPoke(poke)
  }
  
  export const goHome = navigate => {
    navigate('/home')
  }
  
  export const goPerfil = navigate => {
    navigate('/perfil')
  }

  export const goBack = navigate => {
    navigate(-1)
  }