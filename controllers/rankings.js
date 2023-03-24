exports.getRankings = async (req, res) => {
    res.render('layouts/pages/rankings', { docTitle: 'FS Consulting LLC | Rankings', renderCharts: true, renderApexCharts:true });
}