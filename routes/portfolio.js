const express = require('express');
const { checkJwt, checkRole } = require('../controllers/auth');
const router = express.Router();
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require('../controllers/portfolio');

router.get('', getPortfolios);
router.get('/:id', getPortfolioById);

router.post('/create', checkJwt, createPortfolio);
router.patch('/:id', checkJwt, updatePortfolio);
router.delete('/:id', checkJwt, deletePortfolio);

module.exports = router;
