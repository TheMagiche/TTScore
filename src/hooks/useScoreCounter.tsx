import {useContext} from 'react';
import { ScoreCounterContext } from '@/context/ScoreCounterContext';

export const useScoreCounter = () => useContext(ScoreCounterContext);
