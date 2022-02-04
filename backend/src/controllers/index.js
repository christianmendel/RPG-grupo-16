import equipament from '../mockJson/equipment.json';
import kind from '../mockJson/kind.json';
import modelCharacter from '../mockJson/modelCharacter.json';
import quest from '../mockJson/quest.json';
import raca from '../mockJson/raca.json';
import personagens from '../mockJson/personagens.json';

function criarPersonagem(req, res) {
  res
    .status(200)
    .json([{ equipament }, { kind }, { modelCharacter }, { quest }, { raca }]);
}

function selecionarPersonagem(req, res) {
  res.status(200).json({ personagens });
}

export { criarPersonagem, selecionarPersonagem };
