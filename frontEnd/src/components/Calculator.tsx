import { Button, Form, InputGroup } from 'react-bootstrap';

import { useForm } from '../hooks/useForm';
import BitcoinImage from '../assets/825540.png';
import CardanoImage from '../assets/cardano.png';
import EthereumImage from '../assets/ethereum.png';

import { useCoins } from '../hooks/useCoins';
import { useState } from 'react';

export const Calculator = () => {
  const { coins } = useCoins();
  const { amount, onInputChange, onResetForm } = useForm({ amount: '' });
  const [valuesAmount, setValuesAmount] = useState({
    bitcoinAmount: '',
    cardanoAmount: '',
    ethereumAmount: '',
  });

  const [inputValidate, setInputValidate] = useState(false);

  const calculateAmount = (event: React.SyntheticEvent) => {
    event.preventDefault();
    let amounts = {
      bitcoinAmount: '',
      cardanoAmount: '',
      ethereumAmount: '',
    };

    const valoresAceptados = /^[0-9]+$/;

    if (amount === '') {
      setInputValidate(true);
      onResetForm();
    } else if (!amount.match(valoresAceptados)) {
      setInputValidate(true);
      onResetForm();
    } else {
      setInputValidate(false);
      coins.payload.map((coin) => {
        switch (coin.name) {
          case 'Bitcoin':
            amounts = {
              ...amounts,
              bitcoinAmount: (
                coin.metrics.market_data.price_usd * amount
              ).toLocaleString(),
            };

          case 'Ethereum':
            amounts = {
              ...amounts,
              ethereumAmount: (
                coin.metrics.market_data.price_usd * amount
              ).toLocaleString(),
            };
          case 'Cardano':
            amounts = {
              ...amounts,
              cardanoAmount: (
                coin.metrics.market_data.price_usd * amount
              ).toLocaleString(),
            };
        }
      });
      onResetForm();
      setValuesAmount(amounts);
    }
  };

  const ValidateValuesAmount = () => {
    if (inputValidate) {
      return (
        <>
          <label className='red'>{'Debes ingresar solo numeros'}</label>
          <label className='red'>{'Debes ingresar un valor'}</label>
        </>
      );
    } else {
      return (
        <>
          <label className='hidden'>{'Debes ingresar solo numeros'}</label>
          <label className='hidden'>{'Debes ingresar un valor'}</label>
        </>
      );
    }
  };

  return (
    <section className='container'>
      <div className='row my-5 col-6'>
        <label className='title'>Currency converter </label>

        <form onSubmit={calculateAmount}>
          <InputGroup className='mb-3'>
            <Form.Control
              placeholder='Write a amount'
              aria-label='Write a amount'
              aria-describedby='basic-addon2'
              type='text'
              name='amount'
              value={amount}
              onChange={onInputChange}
            />
            <Button
              type='submit'
              className='btnCalc'
              variant='outline-secondary'
              id='button-addon2'
            >
              Convert
            </Button>
          </InputGroup>
        </form>
        {<ValidateValuesAmount />}
      </div>
      <div className='col-6 showValues'>
        <label className='my-1 labelCoin'>
          {`${valuesAmount.bitcoinAmount || 0} USD`}
          <img className='imageCoin' src={BitcoinImage} />
        </label>
        <label className='my-1 labelCoin'>
          {`${valuesAmount.ethereumAmount || 0} USD`}
          <img className='imageCoin' src={EthereumImage} />
        </label>
        <label className='my-1 labelCoin'>
          {`${valuesAmount.cardanoAmount || 0} USD`}
          <img className='imageCoin' src={CardanoImage} />
        </label>
      </div>
    </section>
  );
};
