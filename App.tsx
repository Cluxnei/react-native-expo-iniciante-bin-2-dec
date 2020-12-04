import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import * as S from './styles';

function bin2dec1(bin: string): number {
    let decimal = 0;
    const binLen = bin.length;
    for (let  i = binLen - 1; i >= 0; i--) {
        const binNum = parseInt(bin[i], 10);
        decimal += binNum * 2 ** (binLen - 1 - i);
    }
    return decimal;
}

function bin2dec2(bin: string): number {
    let decimal = 0;
    bin.split('').reverse().forEach((item, index) => {
        if (item === '1') {
            decimal += 2 ** index; // ou Math.pow(2, index)
        }
    });
    return decimal;
}

function bin2dec3(bin: string): number {
    return bin.split('')
        .map(Number)
        .reverse()
        .reduce((accumulator, currentValue, index) => (
            accumulator + currentValue * 2 ** index // ou Math.pow(2, idx)
        ), 0);
}

function bin2dec4(bin: string): number {
    return parseInt(bin, 2);
}

export default function App() {
    const [bin, setBin] = useState('0');
    const [dec, setDec] = useState('0');
    const [success, setSuccess] = useState(true);

    function handleBinChange(text: string) {
        setSuccess(/^[0-1]+$/g.test(text))
        setBin(text.length >= 70 ? text.substring(0, 70) : text);
    }

    useEffect(() => {
        setDec(bin2dec1(bin).toString());
        console.log(bin2dec1(bin), bin2dec2(bin), bin2dec3(bin), bin2dec4(bin));
    }, [bin]);

    return (
        <S.Container>
            <StatusBar style="light"/>
            <S.Title>Conversor de binário para decimal</S.Title>
            <S.Message success={success}>{success ? 'Seu decimal está aqui' : 'Números devem ser 0 ou 1'}</S.Message>
            <S.Input value={bin} onChangeText={handleBinChange} />
            <S.Decimal success={success}>{success ? dec : 'Binário Inválido'}</S.Decimal>
        </S.Container>
    );
}
