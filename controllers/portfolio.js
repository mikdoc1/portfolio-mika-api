const Portfolio = require('../db/models/portfolio');
const mongoose = require('mongoose');

exports.getPortfolios = async (req, res) => {
  Portfolio.find((err, doc) => {
    if (err) {
      res.status(422).send(err.message);
    }
    res.json(doc);
  });
};

exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.createPortfolio = async (req, res) => {
  try {
    const userId = req.user.sub;
    const portfolio = new Portfolio(req.body);
    portfolio.userId = userId;
    portfolio._id = new mongoose.Types.ObjectId();
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.updatePortfolio = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const updatedPortfolio = await Portfolio.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
    return res.json(updatedPortfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.deletePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOneAndRemove({ _id: req.params.id });
  return res.json({ _id: portfolio.id });
};
