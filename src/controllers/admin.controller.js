export const getAdmin = (req, res) => {
  res.json({
    error: null,
    data: {
      title: 'Protected title',
      user: req.user,
    },
  })
}
