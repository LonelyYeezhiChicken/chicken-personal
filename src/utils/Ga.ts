import ga4 from 'react-ga4'


const TRACKING_ID: string = import.meta.env.VITE_GA_KEY;
const isProduction: boolean = import.meta.env.VITE_Is_Production;

export const init = () => {
    console.log(isProduction)
    ga4.initialize(TRACKING_ID, {
        testMode: !isProduction
    })
}

export const sendEvent = (name: string) => {
    ga4.event('screen_view', {
        app_name: "chicken say hi",
        screen_name: name,
    });
}

export const sendPageview = (path: string) => {
    ga4.send({
        hitType: 'pageview',
        page: path
    });
}
