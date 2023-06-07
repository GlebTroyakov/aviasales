import { Progress } from 'antd'

export const Loading = () => {
  return (
    <Progress
      strokeLinecap="butt"
      showInfo={false}
      status="active"
      percent={75}
      strokeColor={{
        from: '#78bbf1',
        to: '#2196f3',
      }}
    />
  )
}
