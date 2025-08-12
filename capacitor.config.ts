import { CapacitorConfig } from '@capacitor/cli'
const config: CapacitorConfig = {
  appId: 'com.koolojoe120.empressriddim',
  appName: 'EmpressRiddim',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: { enabled: true },
    LocalNotifications: {
      smallIcon: 'ic_stat_name',
      sound: 'default'
    }
  }
}
export default config
