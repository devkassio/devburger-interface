import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51SGgvG2NgSmca2dbpOqZMhjImsxVv1lLb8lIZAgLtKF0YdNnhCsNG3rfocnMMUtTEkMfF8CTExPQ8GCGl070IUfr00x17n2Axg',
);

export default stripePromise;