import { Language } from './../../../../node_modules/@ngx-translate/core/lib/translate.service.d';
export class Constants{
    static readonly TypeMessage = {
        Error: {
            TextColor: 'text-red-700',
            Icon:'fa-circle-xmark text-red-700',
            BackgroundColor: 'bg-red-200',
            Title: 'Error'
        },
        Alert: {
            TextColor: 'text-cyan-700',
            Icon:'fa-circle-exclamation text-cyan-700',
            BackgroundColor: 'bg-cyan-100',
            Title: 'Alert'
        },
        Warning: {
            TextColor: 'text-yellow-500',
            Icon:'fa-triangle-exclamation text-yellow-500',
            BackgroundColor: 'bg-yellow-100',
            Title: 'Warning'
        },
        Success:{
            TextColor: 'text-green-600',
            Icon:'fa-circle-check text-green-600',
            BackgroundColor: 'bg-green-200',
            Title: 'Success'
        }      
    }
     static readonly DefaultLanguage = 'es'
    static readonly Languages =[
        {
            Code: 'en',
            Name: 'English'
        },
        {
            Code: 'es',
            Name: 'Spanish'
        },
         {
            Code: 'fr',
            Name: 'French'
        },
        {
            Code: 'pt',
            Name: 'Portuguese'
        },
        {
            Code: 'it',
            Name: 'Italian'
        }
    ]
}