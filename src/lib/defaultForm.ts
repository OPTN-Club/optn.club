import getDefaultFormV1, { SettingsFormV1 } from './SettingsFormV1';

export default function getDefaultForm(version: string): SettingsFormV1 {
  if (version === 'v2') {
    return getDefaultFormV1();
  }

  return getDefaultFormV1();
}
