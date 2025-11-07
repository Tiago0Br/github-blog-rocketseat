import dayjsLib from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjsLib.extend(relativeTime)
dayjsLib.locale(ptBr)

export const dayjs = dayjsLib
