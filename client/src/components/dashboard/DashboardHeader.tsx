import Button from "../common/Button";

function DashboardHeader() {
    return (
        <div className="mb-8 flex items-center justify-between">
            <div>
                <p className="text-slate-500">
                    Hoş Geldiniz
                </p>

                <h1 className="mt-2 text-4xl font-bold">
                    Seyahatlerini Planla
                </h1>

                <p>
                    Yeni bir gezi oluştur veya mevcut gezilerini yönet.
                </p>
            </div>

            <Button>
                + Yeni Seyahat
            </Button>
        </div>
    );
}

export default DashboardHeader;