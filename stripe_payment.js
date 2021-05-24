
 let stripe = Stripe("pk_live_51ISaIBAJxrjsbY5W8KeheMzjoGmaFw9dDwnbVtE759bWyDMlebG3tyVSYW8IlwaOed1f5Jh0yWnJEo8cijeVDL4a00ToHwhrIY");
function redirectToCheckout(sessionId){
    stripe.redirectToCheckout({ sessionId:sessionId });

}