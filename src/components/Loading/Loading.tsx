import { Progress } from 'antd'

export const Loading = ({ loadingPercentage }: { loadingPercentage: number }) => {
  return (
    <Progress
      strokeLinecap="butt"
      showInfo={false}
      status="active"
      percent={loadingPercentage}
      strokeColor={{
        from: '#78bbf1',
        to: '#2196f3',
      }}
    />
  )
}
