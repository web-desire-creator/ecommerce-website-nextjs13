import getStripePromise from "@/lib/stripe";
import { Button } from "@/components/ui/Button";



interface data{
    id : number,
    user_id: string,
    product_id: string,
    quantity:number,
    size: string,
    price:number
  }


const CheckOutBtn = ({cartItems}: {cartItems: data[]}) => {

    const handleCheckout = async () => {
        const stripe = await getStripePromise();
        const getresponse = await fetch("/api/stripe-session/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "no-cache",
          body: JSON.stringify(cartItems),
        });
    
        const data = await getresponse.json();
        if (data.session) {
          stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
      };

  return (
    <Button onClick={handleCheckout}>Proceed to Payment</Button>

  )
}

export default CheckOutBtn