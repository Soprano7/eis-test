import React from 'react'
import { LoaderText, LoaderWrapper } from './Loader.styles'
import { Spinner } from '../../shared/ui/Spinner/Spinner.styles'

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
      <LoaderText>Загружаем данные...</LoaderText>
    </LoaderWrapper>
  );
}
