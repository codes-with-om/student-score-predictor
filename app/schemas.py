from pydantic import BaseModel


class StudentData(BaseModel):
    Gender: str
    EthnicGroup: str
    ParentEduc: str
    LunchType: str
    TestPrep: str
    ParentMaritalStatus: str
    PracticeSport: str
    IsFirstChild: str
    TransportMeans: str
    WklyStudyHours: str