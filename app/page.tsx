'use client'

import { Button, Center, Link, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios';

export default function Home() {
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handlePayment = async () => {
    const res = await axios.post('api/pyament/');
    const data = res.data;
    setPaymentUrl(data.link_url);
  };

  return (
    <Center>
      <Stack spacing={12}>
        <Button onClick={handlePayment}>いますぐ購入する</Button>
        {paymentUrl && (
          <Link href={paymentUrl} target='_blank'>決済URL</Link>
        )}
      </Stack>
    </Center>
  )
}
