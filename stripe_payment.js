
 let stripe = Stripe("pk_test_51ISaIBAJxrjsbY5WGELXV0vu1RPgdA15UNStMVJKV9Kbd7FBkg8C0CbX0vTp5jIU2wB75AobVFdqLaxtOSLRM5q700PG2CfgWE");
function redirectToCheckout(sessionId){
    stripe.redirectToCheckout({ sessionId:sessionId });

}