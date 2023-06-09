import clssses from './NotTickets.module.scss'

export const NotTickets = () => {
  return (
    <div className={clssses.container}>
      <img
        className={clssses.image}
        src="data:image/png;base64,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"
        alt="tickets"
      />
      <span>Нет подходящих билетов.</span>
    </div>
  )
}
