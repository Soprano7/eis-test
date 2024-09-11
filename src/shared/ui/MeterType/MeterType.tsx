import React, { FC } from 'react'
import { AreaMeters } from '../../enum/AreaMeters'
import hotIcon from '../../../assets/metertypes/hot.svg'
import coldIcon from '../../../assets/metertypes/cold.svg'
import { MeterTypeText, MeterTypeWrapper } from './MeterType.styles'

interface MeterTypeProps {
    type: AreaMeters
}

export const MeterType: FC<MeterTypeProps> = ({ type }) => {
  let icon: undefined | string = undefined
  let text = ""
  switch (type) {
    case AreaMeters.HotWaterAreaMeter: {
      icon = hotIcon
      text = "ТПЛ"
      break
    }
    case AreaMeters.ColdWaterAreaMeter: {
      icon = coldIcon
      text = "ХВС"
      break
    }
  }
  return (
    <MeterTypeWrapper>
      <img src={icon} />
      <MeterTypeText>{text}</MeterTypeText>
    </MeterTypeWrapper>
  );
}
