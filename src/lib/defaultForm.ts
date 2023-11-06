import getFHDefaultFormV1, { FHSetup } from '../components/formatter/horizon/FHSetup';

export default function getDefaultForm(version: string): FHSetup {
  if (version === 'v2') {
    return getFHDefaultFormV1();
  }

  return getFHDefaultFormV1();
}
