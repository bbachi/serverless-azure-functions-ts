import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { DataService } from '../services/DataService';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const dataService = new DataService();

    if (req.params && req.params.id) {
        context.res = {
            status: 200,
            body: dataService.deleteTodos(context)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

export default httpTrigger;