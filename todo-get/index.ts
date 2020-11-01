import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { DataService } from '../services/DataService';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const dataService = new DataService();
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: dataService.getTodos(context)
    };

};

export default httpTrigger;